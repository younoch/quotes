import { toast } from 'vue3-toastify';
type ToastType = 'info' | 'error' | 'success' | 'warning' | 'dark';

export function useToster () {
  function useToast (type: ToastType, message: string) {
    toast[type](message,{
      autoClose: true,
      theme: 'colored',
      position: 'bottom-right'
    });
  }

  return {
    useToast
  }
}
