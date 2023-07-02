// const fs = require('fs');
// const path = require('path');
// const { getFilesizeInBytes } = require('./logic');

import path from 'path';
import { getFilesizeInBytes, makeFolderByFileSize } from './logic.js';

// 1. cli로부터 경로 가져오기
console.log(process.argv);

const fileLocation = process.argv[2];
const resultLocation = process.argv[3];

// console.log(__dirname);

// 2. 폴더 만들기

console.log(
  getFilesizeInBytes(
    path.join('../작품/배포이미지', '시간을 담다 41x53cm Mixed media on canvas 2022.jpg')
  )
);

makeFolderByFileSize('../작품/배포이미지', 7);
