import { useHttp } from "../hooks/http.hook";

export const useRectCaseService = () => {
    const _apiUrl = "https://7eff46a25730df3d.mokky.dev/boxes";
    const { request } = useHttp()

    const getCases = async (url = _apiUrl) => {
        const res = await request(url)
        return res;
    }

    const getCase = async (id, url = _apiUrl) => {
        const res = await request(url, id)
        return _dataTransformCase(res)
    }

    const _dataTransformCase = (data) => {
        return {
            id: data.id,
            nameCase: data.nameCase,
            buyKey: data.buyKey,
            imageCase: data.imageCase,
            weaponsCase: data.weaponsCase
        };
    };

    return { getCases, getCase }
}