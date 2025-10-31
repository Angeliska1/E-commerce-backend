import Joi from "joi";

// creating a new user
export const createUserSchema = Joi.object({
  firstName: Joi.string().trim().min(2).required().messages({
    "string.empty": "First name is required",
    "string.min": "First name must have at least 2 characters",
  }),

  lastName: Joi.string().trim().min(2).required().messages({
    "string.empty": "Last name is required",
    "string.min": "Last name must have at least 2 characters",
  }),

  email: Joi.string().email().trim().lowercase().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
  }),

  password: Joi.string().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long",
    "string.empty": "Password is required",
  }),

  role: Joi.string().valid("customer", "admin").default("customer"),

  verified: Joi.boolean().default(false),

  phoneNumber: Joi.string().trim().optional(),

  address: Joi.object({
    street: Joi.string().optional(),
    city: Joi.string().optional(),
    state: Joi.string().optional(),
    zipCode: Joi.string().optional(),
    country: Joi.string().optional(),

  }).optional(),
});

// Validation schema for logging in
export const loginSchema = Joi.object({
  email: Joi.string().email().trim().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});

// Validation for updating user info
export const updateUserSchema = Joi.object({
  firstName: Joi.string().trim().min(2),
  lastName: Joi.string().trim().min(2),
  phoneNumber: Joi.string().trim(),
  address: Joi.object({
    street: Joi.string().allow("").optional(),
    city: Joi.string().allow("").optional(),
    state: Joi.string().allow("").optional(),
    zipCode: Joi.string().allow("").optional(),
    country: Joi.string().allow("").optional(),
  }).optional(),
}).min(1); // at least one field must be provided

export const verifyResetOTPSchema = Joi.object({
  code: Joi.string().length(6).required(),
  email: Joi.string().email().required(),
});

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email",
  }),
});

export const resetPasswordSchema = Joi.object({
  newPassword: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  code: Joi.string().length(6).required(),
});

export const verifyEmailSchema = Joi.object({
  code: Joi.string().trim().length(6).required().messages({
    "string.empty": "Verification code is required",
    "string.length": "Verification code must be 6 characters long",
  }),
});

