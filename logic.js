import fs from 'fs';
import path from 'path';
import { filePath, folderPathByFileSize } from './pathDeclaration.js';

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
export const moveFiles = async (fileName, moveFrom, moveTo, isSkip = true) => {
  if (fs.existsSync(filePath(moveTo, fileName)) && isSkip) {
    console.log('이미 있음');
  } else {
    console.log('없음 이동시킴 ');
    fs.promises.rename(`${moveFrom}/${fileName}`, `${moveTo}/${fileName}`).catch(() => {});
  }
};

// 파일 복사하기
export const copyFiles = async (fileName, moveFrom, moveTo, isSkip = true) => {
  if (fs.existsSync(filePath(moveTo, fileName)) && isSkip) {
    console.log('이미 있음');
  } else {
    console.log('없음 이동시킴 ');
    fs.promises.copyFile(`${moveFrom}/${fileName}`, `${moveTo}/${fileName}`).catch(() => {});
  }
};
