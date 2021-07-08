const express = require('express');
const app = express();
const { PythonShell } = require('python-shell')
//post������� �����͸� ���� �� �ʿ��� ����Դϴ�.
//req�� �����͸� ����ݴϴ�.

app.get('',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get("/",function(req,res){
let options = {
  mode: 'text',
  pythonOptions: ['-u'], // get print results in real-time
  args: req.param('stations') // Python Script�� �Ѱ��� ���� ���
};
console.log("stations :", req.param('stations'));
PythonShell.run('./test.py', options, function(err, msg) {
	if (err) throw err;
    console.log('results: %j', msg);
    res.json(msg);
});
})
// Python Script�� ���μ��� �����ϱ�
app.listen(3001, () => {
    console.log('listen to 3001')
})