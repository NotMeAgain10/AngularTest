interface Photo {
    __type: string
    name: string 
    url: string
}

export default interface LandmarkModel {
    objectId?: string;
    title?: string;
    photo_thumb?: Photo;
    photo?: Photo;
    createdAt?: string;
    updatedAt?: string;
    short_info?: string;
    location?: number[];
    description?: string;
    url?: string;
    order?: number;
}