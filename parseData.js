class Sensor{
    voltage;
    temperature;
    humid;
    temperatureExt;
    constructor (buffer) {
        this.voltage=parseFloat(Number('0x'+buffer.substr(0,4))&0x3FFF,16);
        this.temperature=parseFloat(Number('0x'+buffer.substr(4,4)),16)/100;
        this.humid=parseFloat(Number('0x'+buffer.substr(8,4)),16)/10;
        if(Number('0x'+buffer.substr(12,2))==0x01){
            this.temperatureExt=parseFloat(Number('0x'+buffer.substr(14,4)),16)/100
        }
        else{
            this.temperatureExt=null;
        }
    }
    toJson(){
        let tempJson=JSON.stringify({ teplota: this.temperature+'°C', vlhkosť : this.humid+'%', 
        batéria: this.voltage+'mV', teplotaExt: this.temperatureExt+'°C'})

        console.log(tempJson);
        return tempJson;

    }   
}
module.exports=Sensor;