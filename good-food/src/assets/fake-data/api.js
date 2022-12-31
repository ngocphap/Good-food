export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Bình luận 1",
      username: "Nguyen Abc",
      userId: "1",
      parentId: null,
      createdAt: "2022-12-30T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Bình luận 2",
      username: "Nguyen C",
      userId: "2",
      parentId: null,
      createdAt: "2022-12-30T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Bình luận trả lời bình luận đầu",
      username: "Nguyen B",
      userId: "2",
      parentId: "1",
      createdAt: "2022-12-30T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Bình luận trả lời bình luận 2",
      username: "Nguyen A",
      userId: "2",
      parentId: "2",
      createdAt: "2022-12-30T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Phap",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
