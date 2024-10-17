import frioMediano from "../img/friomediano.jfif"
import calorExtremo from "../img/calorExtremo.jfif";
import calorLeve from "../img/calorLeve.jfif";
import frioLeve from "../img/frioleve.jpg";
import frioExtremo from "../img/frioExtremo.jfif"
import { useForm } from "react-hook-form";
import { useCloud } from "../Context/Cloud";
function Cloud() {
  const { register, getValues } = useForm();
  const { SearchCloud, datosClima, error} = useCloud();
  let imagen;
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const nameCity = getValues("name");
      SearchCloud(nameCity);
    }
  };
  if(datosClima){
    const temperatura = Math.round(datosClima.temp);
    if( temperatura <= 3 ){
      imagen = frioExtremo
    }else if( temperatura <= 16 ){
      imagen = frioMediano
    }else if(temperatura <= 28){
      imagen = frioLeve
    }else if(temperatura <= 33){
      imagen = calorLeve
    }else if(temperatura >= 34){
      imagen = calorExtremo
    }
  }
  return (
    <div className="row">
      <div className="input-search">
        <input
          type="text"
          {...register("name", { required: true })}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="card">
        { datosClima ? (
          <div className="card-content">
            <img src={imagen} className="img" />
            <h1 className="title-clima">{datosClima.name}</h1>
            <h1 className="grados">{Math.round(datosClima.temp)}°C</h1>
            <div className="content-info">
              <div className="group">
                <h1>{Math.round(datosClima.humedity)}</h1>
                <p>humedad</p>
              </div>
              <div className="group">
                <h1>{Math.round(datosClima.temp_max)}</h1>
                <p>Tem.Max</p>
              </div>
              <div className="group">
                <h1>{Math.round(datosClima.temp_min)}</h1>
                <p>Tem.Min</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {error ? (
              <h1 className="error">{error}</h1> // Mostrar error si hay
            ) : (
              <h1>Buscar un lugar</h1>
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default Cloud;
