// Define la interfaz para los datos de las filas
export interface DataRow {
    id: number;
    created_at: string;
    updated_at: string;
    is_active: boolean;
    date_time: string;
    temperature: string;
    humidity: string;
    pressure: string;
    altitude: string;
    node: number;
}