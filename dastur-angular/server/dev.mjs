import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ngCliPath = path.join(rootDir, 'node_modules', '@angular', 'cli', 'bin', 'ng.js');
const proxyServerPath = path.join(rootDir, 'server', 'telegram-proxy.mjs');

const children = [];

function run(name, command, args) {
  const child = spawn(command, args, {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
  });

  child.on('exit', code => {
    if (code !== 0) {
      console.error(`${name} exited with code ${code}`);
      shutdown(code ?? 1);
    }
  });

  children.push(child);
}

function shutdown(code = 0) {
  while (children.length) {
    const child = children.pop();
    if (child && !child.killed) {
      child.kill();
    }
  }
  process.exit(code);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

run('telegram-proxy', process.execPath, [proxyServerPath]);
run('angular', process.execPath, [ngCliPath, 'serve', '--proxy-config', 'proxy.conf.json']);
