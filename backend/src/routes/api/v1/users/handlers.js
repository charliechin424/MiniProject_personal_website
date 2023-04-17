import { prisma } from "../../../../adapters";

export async function getAllUsers(req, res) {
  const allUsers = await prisma.user.findMany();
  return res.json(allUsers);
}
export async function getComment(req,res){
  const allComment = await prisma.comment.findMany({orderBy: {
    id: 'desc'
  }});
  return res.json(allComment);
}

export async function createUser(req, res) {
  if (await prisma.user.findUnique({where:{name: req.body.name}}) === null) {
    const user = await prisma.user.create({ data: { name: req.body.name , password: req.body.password, image: req.body.image, Student_ID: req.body.Student_ID, NTU_mail: req.body.NTU_mail} });
    return res.status(201).json(user);
  } else {
    return res.send("Error");
  }
}


export async function getOneUser(req, res) {
  const { name, password } = req.body;

  const user = await prisma.user.findUnique({ where: { name:name, }, });
  if (user === null) return res.send("null");
  if (user.password === password){
    req.session.userID = user.id;
  }
  return res.json(user);
}

export async function getOneComment(req, res) {
  const oneComment = await prisma.comment.findMany({orderBy: {id: 'desc'}, take: 1});
  return res.json(oneComment);
}

export async function createComment(req, res) {
  const id = req.session.userID;
  const user = await prisma.user.findUnique({where: {id: id,}, });
  const comment = await prisma.comment.create({data: {message: req.body.message, userId: id, username: user.name, image: user.image, Student_ID: user.Student_ID, NTU_mail: user.NTU_mail }});
  return res.status(201).json(comment);
}

export async function getUser(req,res){
  const {id} = req.body.id;
  const user = await prisma.user.findUnique({where:{id}});
  return res.json(user);
}

export async function getProfile(req,res){
  const user = await prisma.user.findUnique({where:{id: req.session.userID}});
  return res.json(user);
}

export async function deletecomment(req,res){
  const id = req.body.id;
  const userId = req.body.userId;
  if(req.session.userID === userId){
    const comment = await prisma.comment.delete({where:{id: id}});
    return res.status(201).json(comment);
  } else {
    return res.send("Error");
  }
}

export async function getid(req,res){
  if (req.session.userID !== undefined){
    return res.send(await prisma.user.findUnique({ where: { id: req.session.userID}, select: { image: true }}));
  } else {
    return res.send("null");
  }
}


export async function logout(req,res){
  req.session.userID = undefined;
  return res.send("OK"); 
}

