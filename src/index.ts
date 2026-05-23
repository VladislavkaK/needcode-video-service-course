import express from 'express';
import ffmpeg from 'fluent-ffmpeg';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/process-video', (req, res) => {
    // Получаем path к входному video файлу из body запроса
    const inputFilePath = req.body.inputFilePath;
    const outputFilePath = req.body.outputFilePath;

    // Проверяем, определен ли path к входному файлу
    if (!inputFilePath || !outputFilePath) {
        return res.status(400).send('Bad Request: Missing file path');
    }

    // создаем команду ffmpeg
    ffmpeg(inputFilePath)
        .outputOptions('-vf', 'scale=-1:360') // 360p
        .on('end', function() {
            console.log('Processing finished successfully');
            res.status(200).send('Processing finished successfully');
        })
        .on('error', function(err: any) {
            console.log('An error occurred: ' + err.message);
            res.status(500).send('An error occurred: ' + err.message);
        })
        .save(outputFilePath);
});

app.listen(port, () => {
    console.log('Server running ...');
});
