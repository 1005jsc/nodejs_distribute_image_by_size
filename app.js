// const fs = require('fs');
// const path = require('path');
// const { getFilesizeInBytes } = require('./logic');

import path from 'path';
import fs from 'fs';
import { getFilesizeInBytes, makeFolderByFileSize } from './logic.js';

// 1. cli로부터 경로 가져오기
console.log(process.argv);

const fileLocation = process.argv[2];
const resultLocation = process.argv[3];

// console.log(__dirname);

// 2. 모든 사진 분류하기

// 사진 가져오기

fs.promises.readdir(fileLocation).then(processFiles);

function processFiles(files) {
  console.log(files);

  files.forEach((file) => {
    handleFile(file);
  });
}

function handleFile(fileName) {
  // 파일 사이즈 확인
  const fileSize = getFilesizeInBytes(fileLocation, fileName);
  // 파일 사이즈에 폴더있나 없나 확인 있으면 만들고 없으면 넘김

  if (fs.existsSync(path.join(resultLocation, `${fileSize}`))) {
    // 있으면 넘어감
    console.log('있음', path.join(fileLocation, fileName));
  } else {
    // 없으면 만듬
    console.log('없음');
    makeFolderByFileSize(resultLocation, fileSize);
  }

  // 만들어진 폴더에 투입
}
