export class InputValidator {
  static validateLogin(value: string) {
    const regex = /^(?=.*[a-zA-Z])([a-zA-Z0-9_-]{3,20})$/
    return regex.test(value)
      ? null
      : 'Логин должен быть от 3 до 20 символов, содержать только буквы, цифры, но не состоять из них, допустимы дефис и подчеркивание'
  }

  static validatePassword(value: string) {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,40}$/
    return regex.test(value)
      ? null
      : 'Пароль должен быть от 8 до 40 символов и содержать хотя бы одну заглавную букву и одну цифру'
  }

  static validateName(value: string) {
    const regex = /^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/
    return regex.test(value)
      ? null
      : 'Первая буква должна быть заглавной, без пробелов и цифр, допустим только дефис'
  }

  static validateEmail(value: string) {
    const regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(value)
      ? null
      : 'Введите правильный адрес электронной почты'
  }

  static validatePhone(value: string) {
    const cleaned = value.replace(/\D/g, '')
    return cleaned.length >= 10 && cleaned.length <= 15
      ? null
      : 'Введите правильный номер телефона'
  }
}
