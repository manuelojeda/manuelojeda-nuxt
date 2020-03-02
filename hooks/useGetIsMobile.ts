const useGetIsMobile = (): boolean => {
  let isMobile: boolean = true

  if (window.innerWidth >= 768) {
    isMobile = false
  }

  return isMobile
}

export default useGetIsMobile
