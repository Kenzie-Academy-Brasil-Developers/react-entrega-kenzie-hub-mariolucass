export const useRegister = (data) => {
  console.log(data);

  const dataApi = {
    email: data.email,
    password: data.password,
    name: data.name,
    bio: data.bio,
    contact: data.contact,
    course_module: data.modulo,
  };

  console.log(dataApi);
};
