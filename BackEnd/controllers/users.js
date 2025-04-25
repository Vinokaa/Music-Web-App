import {db} from "../db.js"
import fs from "fs"

const table = "musicas";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM " + table;
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    });
}

export const postUser = (req, res) => {
    const body = req.body;

    if(body.name.length == 0 || body.author.length == 0 || body.album.length == 0 || body.year_release_date.length == 0 || body.plays == [] || req.files[0] == undefined){
        return res.status(400).json({error: "Dados preenchidos incorretamente"});
    }

    const q = `INSERT INTO ${table} (name, author, album, year_release_date, plays, image_name) VALUES ('${req.body.name}', '${req.body.author}', '${req.body.album}', '${req.body.year_release_date}', '${req.body.plays}', '${req.files[0].filename}')`;

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(201).json(data);
    })
}

export const updateUser = (req, res) => {
    const body = req.body;

    if(body.name.length == 0 || body.author.length == 0 || body.album.length == 0 || body.year_release_date.length == 0 || body.plays == []){
        return res.status(400).json({error: "Dados preenchidos incorretamente"});
    }

    if(req.files[0] != undefined){
        const q1 = `SELECT image_name FROM ${table} WHERE id = '${req.body.id}'`;

        db.query(q1, (err, data) => {
            if (err) return res.json(err);
            fs.unlink(`./uploads/${data[0].image_name}`, (err) => {
                if (err) console.log("File doesn't exist");
            });
        })

        const q2 = `UPDATE ${table} SET name = '${req.body.name}', author = '${req.body.author}', album = '${req.body.album}', year_release_date = '${req.body.year_release_date}', plays = '${req.body.plays}', image_name = '${req.files[0].filename}' WHERE id = '${req.body.id}'`;

        db.query(q2, (err, data) => {
            if (err) return res.json(err);
            return res.status(204).json(data);
        })
    }else{
        const q = `UPDATE ${table} SET name = '${req.body.name}', author = '${req.body.author}', album = '${req.body.album}', year_release_date = '${req.body.year_release_date}', plays = '${req.body.plays}' WHERE id = '${req.body.id}'`;

        db.query(q, (err, data) => {
            if (err) return res.json(err);
            return res.status(204).json(data);
        })
    }
}

export const deleteUser = (req, res) => {
    const q1 = `SELECT image_name FROM ${table} WHERE id = '${req.body.id}'`;

    db.query(q1, (err, data) => {
        if (err) return res.json(err);
        fs.unlink(`./uploads/${data[0].image_name}`, (err) => {
            if (err) console.log("File doesn't exist");
        });
    })

    const q2 = `DELETE FROM musicas WHERE id = '${req.body.id}'`;

    db.query(q2, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    })
}