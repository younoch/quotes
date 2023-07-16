export {contact}

declare global {
  interface contact {
    name: string;
    email: string;
    subject: string
    message: string
  }
}
