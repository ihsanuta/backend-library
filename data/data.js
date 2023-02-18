import fs from 'fs'
export default async function Add(data){
    console.log(data)
    return new Promise((resolve, reject) => {
        fs.writeFile('./data.json', JSON.stringify(data),function (error) {
          if (error) return reject(error);
          resolve();
        })
    });
}

export async function Get(){
    return new Promise((resolve, reject) => {
        fs.readFile('./data.json', function (error, data) {
          if (error) return reject(error);
          resolve(JSON.parse(data.toString()));
        })
    });
}