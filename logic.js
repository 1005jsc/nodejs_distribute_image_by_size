import fs from 'fs';
import path from 'path';

// 파일의 용량 알아오기 MB, 올림처리
export function getFilesizeInBytes(filePath) {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats.size;

  return Math.ceil(fileSizeInBytes / (1024 * 1024));
}

// 폴더 만들기
export const makeFolderByFileSize = (folderPath, fileSize) => {
  const newFolderPath = path.join(folderPath, `${fileSize}MB`);
  !fs.existsSync(newFolderPath) && fs.mkdirSync(newFolderPath);
};
