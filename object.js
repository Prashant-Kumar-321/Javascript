const signUpForm = {
    name: 'Prashant',
    email: 'pk@example.com',
    password: 'akdfdf@234e3AT',
    confirmPassword: 'akdfdf@234e3AT',
    agreeTC: true,
}

console.log('Keys of signUpForm Object')
for(const key in signUpForm){
    console.log(`${key} -- ${signUpForm[key]}`)
}
