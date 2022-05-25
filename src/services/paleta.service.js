import Paleta from '../models/Paleta.js'

export const findAllPaletasService = async() => {
    const allPaletas = await Paleta.find();
    return allPaletas;
};

export const findByIdPaletaService = async(idParam) => {
    const onePaleta = await Paleta.findById(idParam);
    return onePaleta;
};

export const createPaletaService = async(newPaleta) => {
    const createdPaleta = await Paleta.create(newPaleta);
    return createdPaleta;
};

export const updatePaletaService = async(idParam, editPaleta) => {
    const updatePaleta = await Paleta.findByIdAndUpdate(idParam, editPaleta)
    return updatePaleta;
};

export const deletePaletaService = async(idParam) => {
    return await Paleta.findByIdAndDelete(idParam)
};