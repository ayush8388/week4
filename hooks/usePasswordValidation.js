"use client"
export function usePasswordValidation() {
    const validatePassword = (password) => {
        if (password.length < 6) {
            return "Password must be at least 6 characters"
        } else if (!password.match(/[A-Z]/)) {
            return "Password must contain at least one uppercase letter"
        } else if (!password.match(/[a-z]/)) {
            return "Password must contain at least one lowercase letter"
        } else if (!password.match(/\d/)) {
            return "Password must contain at least one number"
        } else {
            return true
        }
    }
    const validateConfirmPassword = (password, confirmPassword) => {
        if (password !== confirmPassword) {
            return "Passwords do not match"
        } else {
            return true
        }
    }
  return {validatePassword, validateConfirmPassword}
}

