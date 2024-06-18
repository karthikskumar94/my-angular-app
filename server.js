const express=require('express');
const  bodyParser=require('body-parser');
const fs=require('fs');
const path=require('path');
const cors=require('cors');

const app=express();
const PORT=3000;

const DATA_FILE=path.join(__dirname, 'C:/Users/karthik.k23/Desktop/AngularProj/my-angular-app/server.js');

app.use(bodyParser.json());
app.use(cors());

function readData(){
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeData(data){
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.post('/api/services', (req, res) => {
    const services=readData();
    services.push(req.body);
    writeData(services);
    res.status(201).json(services);
});

app.put('/api/services/:index', (req, res) =>{
    const services=readData();
    const index=req.params.index;
    services[index]=req.body;
    writeData(services);
    res.json(services);
});

app.delete('/api/services/:index', (req, res) => {
    const services=readData();
    const index=req.params.index;
    services.splice(index, 1);
    res.json(services);
});

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`);
});