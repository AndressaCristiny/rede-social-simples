import { db } from "../db";

//Exibir usuários cadastrados
export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

//Exibir usuário logado
export const getUserLogado = (_, res) => {
    const q = "SELECT * FROM logado";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

//Pegar informações do usuário logado
export const getInfoLog = (req, res) => {
    const q = "SELECT * FROM usuarios WHERE id = ?";

    db.query(q, [req.body.id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

//Validar
export const postValidar = (req, res) => {
    const q = "SELECT * FROM usuarios WHERE email = ? && senha = ?";

    db.query(q, [req.body.email, req.body.senha], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

//Logado
export const postLogado = (req, res) => {
    const q = "INSERT INTO logado(`idUser`) VALUES(?)";

    const values = [
        req.body.idUser
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário logado com sucesso.");
    });
};

//Add usuários
export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`, `sobrenome`, `nascimento`, `telefone`, `email`, `senha`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.sobrenome,
        req.body.nascimento,
        req.body.telefone,
        req.body.email,
        req.body.senha
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

//Update usuário
export const updateUser = (req, res) => {
    const q =
        "UPDATE usuarios SET `nome` = ?, `sobrenome` = ?, `nascimento` = ?, `telefone` = ?, `telefone` = ?, `email` = ?, `senha` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.sobrenome,
        req.body.nascimento,
        req.body.telefone,
        req.body.email,
        req.body.senha
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

//Deletar usuário
export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};

//Deletar usuário logado
export const deleteLogado = (req, res) => {
    const q = "TRUNCATE TABLE logado";

    db.query(q, (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};