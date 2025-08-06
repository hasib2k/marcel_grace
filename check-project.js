#!/usr/bin/env node

// Simple test to verify the project structure
const fs = require('fs');
const path = require('path');

console.log('🔍 Marcel Grace Infotech - Project Structure Check');
console.log('================================================');

const requiredFiles = [
  'package.json',
  'next.config.js',
  'tailwind.config.js',
  'tsconfig.json',
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'app/about/page.tsx',
  'app/services/page.tsx',
  'app/portfolio/page.tsx',
  'app/blog/page.tsx',
  'app/careers/page.tsx',
  'app/contact/page.tsx',
  'app/components/Navbar.tsx',
  'app/components/Hero.tsx',
  'app/components/About.tsx',
  'app/components/Footer.tsx',
];

let allFilesExist = true;

console.log('\n📁 Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

console.log('\n📊 Summary:');
console.log(`Status: ${allFilesExist ? '✅ All files present' : '❌ Some files missing'}`);
console.log(`Total files checked: ${requiredFiles.length}`);

if (allFilesExist) {
  console.log('\n🚀 Project is ready for development!');
  console.log('Run "npm run dev" to start the development server.');
} else {
  console.log('\n⚠️  Some required files are missing. Please check the structure.');
}

console.log('\n🌐 Pages available:');
console.log('• Home: /');
console.log('• About: /about');
console.log('• Services: /services');
console.log('• Portfolio: /portfolio');
console.log('• Blog: /blog');
console.log('• Careers: /careers');
console.log('• Contact: /contact');
