const { PrismaClient } = require("@prisma/client");

const prismaDb = new PrismaClient();

async function seed() {
  await prismaDb.post.deleteMany();
  await prismaDb.user.deleteMany();

  const khalil = await prismaDb.user.create({
    data: {
      username: "khalil",
    },
  });

  const amine = await prismaDb.user.create({
    data: {
      username: "amine",
    },
  });

  const post1 = await prismaDb.post.create({
    data: {
      title: "Post 1",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  });

  const post2 = await prismaDb.post.create({
    data: {
      title: "Post 2",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  });

  const comment1 = await prismaDb.comment.create({
    data: {
      userId: khalil.id,
      postId: post1.id,
      content: "this is comment 1",
    },
  });

  const comment2 = await prismaDb.comment.create({
    data: {
      userId: amine.id,
      postId: post2.id,
      content: "this is comment 2",
    },
  });

  const comment3 = await prismaDb.comment.create({
    data: {
      userId: amine.id,
      postId: post1.id,
      parentId: comment1.id,
      content: "this is a nested comment",
    },
  });
}

seed();
