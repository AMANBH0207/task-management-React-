import { toast } from "react-toastify";

let admin = JSON.parse(localStorage.getItem("AdminUsers")) || [];
let Mainusers = JSON.parse(localStorage.getItem("MainUsers")) || [];
export let Addedusers = JSON.parse(localStorage.getItem("AddedUsers")) || [];
let otpVAL = "";
//Signup Validations
// export function validations(val, formVal, navigate, LS) {
//   if (val.First_Name.length === 0) {
//     return "Please enter your First Name";
//   } else if (val.Email.length === 0) {
//     return "Please enter your Email";
//   } else if (val.Confirm_Email.length === 0) {
//     return "Please confirm your Email";
//   } else if (val.Password.length === 0) {
//     return "Please enter your password";
//   } else if (val.Confirm_Password.length === 0) {
//     return "Please confirm your Password";
//   } else if (val.Tc === false) {
//     return "Please accept the terms and conditions";
//   } else if (val.Email !== val.Confirm_Email) {
//     return "Email does not match";
//   } else if (val.Password !== val.Confirm_Password) {
//     return "Password does not match";
//   } else {
//     if (LS.some((user) => user.email === val.Email)) {
//       return "Email already exists";
//     } else {
//       let user = {
//         firstname: val.First_Name,
//         lastname: val.Last_Name,
//         userphoto:
//           "https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/DefaultUser.png?alt=media&token=dabfa0e1-763a-4d06-8497-2e4cd97ea298",
//         email: val.Email,
//         password: val.Password,
//       };
//       LS.push(user);
//       console.log(LS);

//       toast.success("Signup Successful");
//       // setTimeout(() => {
//       //   navigate("/");
//       // }, 5000);
//     }
//   }
// }
//Login Validations
// export function loginValidations(val, formVal, navigate) {
//   const user = admin.find(
//     (user) => user.email.toLowerCase() === val.email.toLowerCase()
//   );
//   if (val.email.length === 0) {
//     return "Please enter your Email";
//   } else if (val.password.length === 0) {
//     return "Please enter your password";
//   } else if (formVal) {
//     if (user && user.password === val.password) {
//       localStorage.setItem("LoggedAdmin", JSON.stringify(user.email));
//       toast.success("Login Successful");
//       setTimeout(() => {
//         navigate("/admin/home");
//       }, 5000);
//     } else {
//       return "Invalid Credentials";
//     }
//   } else if (!formVal) {
//     if (
//       Mainusers.some(
//         (user) => user.email === val.email && user.password === val.password
//       )
//     ) {
//       localStorage.setItem("LoggedUsers", JSON.stringify(admin));
//       toast.success("Login Successful");
//       navigate("/");
//     } else {
//       return "Invalid Credentials";
//     }
//   }
// }
//otp generation
export function otpGeneration(val) {
  if (val.email.length === 0) {
    return "Please enter your Email";
  } else {
    otpVAL = Math.floor(1000 + Math.random() * 9000);
    toast.success(`OTP has been sent : ${otpVAL}`, { autoClose: 15000 });
  }
}
//Forgot Password Validations
export function forgotPasswordValidations(val, formVal, navigate) {
  if (val.email.length === 0) {
    return "Please enter your Email";
  } else if (val.password.length === 0) {
    return "Please enter your password";
  } else if (val.confirmPassword.length === 0) {
    return "Please confirm your password";
  } else if (val.password !== val.confirmPassword) {
    return "Password does not match";
  } else if (otpVAL.length === 0) {
    return "Please enter your OTP";
  } else if (otpVAL !== Number(val.otp)) {
    return "Please enter correct OTP";
  } else if (formVal) {
    admin.forEach((value) => {
      if (value.email === val.email) {
        value.password = val.password;
        localStorage.setItem("AdminUsers", JSON.stringify(admin));
        toast.success("Password changed successfully");
        setTimeout(() => {
          navigate("/login-admin");
        }, 5000);
      }
    });
  } else if (!formVal) {
    Mainusers.forEach((value) => {
      if (value.email === val.email) {
        value.password = val.password;
        localStorage.setItem("MainUsers", JSON.stringify(Mainusers));
        toast.success("Password changed successfully");
        setTimeout(() => {
          navigate("/login-user");
        }, 5000);
      }
    });
  }
}
//searching a user
// export function searchUser(user) {
//   const usr = Mainusers.find(
//     (usr) => usr.email.toLowerCase() === user.toLowerCase()
//   );
//   return usr;
// }
//save a user
// export function saveUser(user) {
//   if (user === undefined) {
//     return "User Not Found. Cannot add user";
//   } else if (Addedusers.some((value) => value.email === user.email)) {
//     return "User already added";
//   } else {
//     Addedusers.push(user);
//     localStorage.setItem("AddedUsers", JSON.stringify(Addedusers));
//     toast.success("User Added Successfully");
//   }
// }
//Save Tasks
// export function saveTask(val) {
//   if (val.title.length === 0) {
//     return "Please enter task title";
//   } else if (val.description.length === 0) {
//     return "Please give a description about the task";
//   } else if (val.assignedusers.length === 0) {
//     return "Please select atleast one user";
//   } else if (val.Start_Date.length === 0) {
//     return "Please specify the start date";
//   } else if (val.End_Date.length === 0) {
//     return "Please specify the end date";
//   } else if (
// val.priority.length === 0 ) {
//     return "Please specify the priority";
//   } else {
//     arr.push(val);
//     localStorage.setItem("AddedTasks", JSON.stringify(arr));
//     setTimeout(() => {
//       handleCross();
//     }, 2000);
    
//   }
// }
