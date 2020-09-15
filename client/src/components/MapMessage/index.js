import React, { Component } from 'react';
import { YMaps, Map } from "react-yandex-maps";

class MapMessage extends Component {
    map = null;

    onYmapsLoad = ymaps => {
        const { location } = this.props;
        this.ymaps = ymaps;
        let map = this.map;

        ymaps
            .route([
                location[0],
                location[1]
            ])
            .then(function (route) {
                map.geoObjects.add(route);
            })
    };

    render() {
        const { location } = this.props;

        return (
            <YMaps query={{ load: "package.full", lang: "en-US" }}>
                <div style={{ position: 'relative', height: '100%' }}>
                    <Map state={{
                            center: location[0],
                            zoom: 14
                        }}
                        instanceRef={ref => this.map = ref}
                        onLoad={this.onYmapsLoad}
                        width="100%"
                        height="100%"
                    />
                </div>
            </YMaps>
        )
  }
}

export default MapMessage;