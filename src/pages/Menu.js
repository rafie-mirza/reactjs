import {useState} from 'react';
import Tabel from './Tabel';

function Menu() {
      const title1 = "Daftar Menu Restoran";
      const [menus,setMenu] = useState(
            [
                  {
                        idmenu: 1,
                        idkategori: 1,
                        menu: "Apel Manalagi",
                        gambar: "apel.jpg",
                        harga:3000,
                  },
                  {
                        idmenu: 2,
                        idkategori: 1,
                        menu: "Pisang Raja",
                        gambar: "pisang.jpg",
                        harga:5000,
                  },
                  {
                        idmenu: 3,
                        idkategori: 2,
                        menu: "Nasi Padang",
                        gambar: "nasipadang.jpg",
                        harga:15000,
                  },
            ]
      )
      return (
        <div className="App">
          <Tabel menu={menus} title1={title1}/>
          <Tabel menu={menus.filter((data)=>(data.idkategori===1))} title1="Menu Buah"/>
        </div>
      );
    }
    
    export default Menu;