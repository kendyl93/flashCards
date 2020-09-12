import User from "./api/users/Model";

const currentUserQuery = async (email) => {
  const currentUser = await User.findOne({ email });

  if (!currentUser) {
    throw new Error("User is not signed in!");
  }

  return currentUser;
};

export default currentUserQuery;
