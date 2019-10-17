export default class IPAdress{

    private bytes: Number[];

    private constructor(){}

    public fromString(IpAdress: String):IPAdress{
        
        try {

            let bytesString = IpAdress.split('.');

            if (bytesString.length > 4 || bytesString.length < 4)
                throw "IpAdress string is not well formed"

            bytesString.forEach(str => {
                let nbr = Number.parseInt(str);
                if (nbr <= 255 && nbr >= 0){
                    this.bytes.push(nbr);
                }
            });

        } catch {
            console.log("error during IPAdress.fromString()");
        }

        return this;
    }
    public fromBytesArray(IpAdress: Number[]):IPAdress{return this;}

    public toString(){}

    public toBytesArray(){}

}