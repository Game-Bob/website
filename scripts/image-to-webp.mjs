import sharp from 'sharp';

async function convertToWebp(input, output, width = null, height = null) {
  try {
    let pipeline = sharp(input);
    if (width || height) {
      pipeline = pipeline.resize(width, height);
    }
    await pipeline
      .toFormat('webp', { quality: 100 })
      .toFile(output);
  } catch (error) {
    process.exit(1);
  }
}

const args = process.argv.slice(2);
if (args.length < 2) {
  process.exit(1);
}

const [inputPath, outputPath, width, height] = args;
convertToWebp(inputPath, outputPath, width ? parseInt(width) : null, height ? parseInt(height) : null);
