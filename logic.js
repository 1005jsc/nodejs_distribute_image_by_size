import fs from 'fs';
import path from 'path';
import { folderPathByFileSize } from './pathDeclaration.js';

// 파일의 용량 알아오기 MB, 올림처리
export function getFilesizeInBytes(filePath, fileName) {
  const stats = fs.statSync(path.join(filePath, fileName));
  const fileSizeInBytes = stats.size;

  return Math.ceil(fileSizeInBytes / (1024 * 1024));
}

// 폴더 만들기
export const makeFolderByFileSize = (folderPath, fileSize) => {
  const newFolderPath = folderPathByFileSize(folderPath, fileSize);
  !fs.existsSync(newFolderPath) && fs.mkdirSync(newFolderPath);
};

// 파일 옮기기
const moveFiles = async (fileName, moveFrom, moveTo) => {
  fs.promises.rename(`${moveFrom}/${fileName}`, `${moveTo}/${fileName}`).catch(() => {});
};
