<FormField
  label="Password"
  error={errors.password}
  touched={touched.password}
>
  <div className="password-wrapper">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      value={formData.password}
      onChange={handleChange}
      onBlur={handleBlur}
      className={`form-input ${errors.password && touched.password ? 'input-error' : ''}`}
      placeholder="Enter your password"
    />
    <button
      type="button"
      className="toggle-password"
      onClick={() => setShowPassword(!showPassword)}
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
    </button>
    
  </div>
</FormField>