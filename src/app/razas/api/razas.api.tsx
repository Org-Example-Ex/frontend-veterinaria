import WebService, { ReponseWerbService } from "../../../config/WebService";

export const obtenerRazasAPI = async (especie_id: number): Promise<ReponseWerbService> => {
    const token = localStorage.getItem('token')
    if (!token) {
        return { error: true, message: 'No tienes acceso a la aplicación', data: null }
    }

    try {

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        const { data } = await WebService(`especies/${especie_id}/razas?estado=1`, config)

        return data
    } catch (error: any) {
        return error.response.data
    }
}