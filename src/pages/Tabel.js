function Tabel(props) {
      const menus=props.menu
      const title1 = props.title1;
      return (
        <div className="App">
          <h1>{title1}</h1>
          <div>
                <table>
                  <tr>
                        <th>Menu</th>
                        <th>Harga</th>
                  </tr>
                {menus.map((data)=>(
                      <tr key={data.idmenu}>
                            <td>{data.menu}</td>
                            <td>{data.harga}</td>
                      </tr>
                ))}
                </table>
          </div>
        </div>
      );
    }
    
    export default Tabel;
