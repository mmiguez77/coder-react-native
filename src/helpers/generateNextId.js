const generateNextId = length => {
  if (length === 0) {
    length = 1;
  } else {
    length = length + 1;
  }

  return length;
};

export default generateNextId;
