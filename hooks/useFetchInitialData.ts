import Axios from "axios"

const useFetchInitialData = async (): Promise<any> => {
  const responseMenu = await Axios({
    url: 'http://localhost:1337/menus'
  })
  const responseSocial = await Axios({
    url: 'http://localhost:1337/social-medias'
  })

  return {
    menu: responseMenu.data,
    social: responseSocial.data,
  }
}

export default useFetchInitialData
