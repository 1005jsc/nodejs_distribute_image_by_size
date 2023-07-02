import path from 'path';

// 용량별 폴더 경로

export const folderPathByFileSize = (resultLocation, fileSize) => {
  return path.join(resultLocation, `${fileSize}MB`);
};

// 파일 경로

export const filePath = (location, fileName) => {
  return path.join(location, fileName);
};
