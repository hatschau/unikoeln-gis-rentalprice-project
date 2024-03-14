import legendContent from './layerControlObject';
import { createRoot } from 'react-dom/client';


const LegendControl = L.Control.extend({
    onAdd: function (map) {
        const div = L.DomUtil.create('div');
        createRoot(div).render(<LegendComponent />, div);
        return div;
    }


});

const LegendComponent = () => {
    console.log(legendContent)
    return (
        <div>
            <h4>Legend</h4>
            {Object.keys(legendContent).map(layerName => (
                <div key={layerName}>
                    <p>{layerName}</p>
                    <table>
                        <tbody>
                            {legendContent[layerName].ranges.map((range, index) => (
                                <tr key={index}>
                                    <td style={{ textAlign: 'center' }}><img src={range.image} alt={`Legend ${index + 1}`} /></td>
                                    <td>{range.label}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};


export { LegendControl, LegendComponent } 