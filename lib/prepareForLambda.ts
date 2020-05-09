import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Layer用の node_module ディレクトリを準備する
 * @param distDir 出力ディレクトリ名
 */
export function prepareLayerModules(distDirName = 'dist'): string {
  const outDir = path.join(__dirname, '..', distDirName, 'layer');
  const moduleDir = path.join(outDir, 'nodejs', 'node_modules');
  fs.rmdirSync(outDir, { recursive: true });
  childProcess.execSync(`yarn install --production --modules-folder ${moduleDir}`);
  return outDir;
}

/**
 * Typescript の Lambda 関数をトランスパイルする。
 * @param distDirName 出力ディレクトリ名
 */
export function transpile(distDirName = 'dist'): string {
  const srcDir = path.join(__dirname, '..', 'src');
  const outDir = path.join(__dirname, '..', distDirName, 'code');
  fs.rmdirSync(outDir, { recursive: true });
  childProcess.execSync(`tsc --project ${srcDir} --outDir ${outDir}`);
  return outDir;
}
