const aboutText = <>
    Wie in jeder Stadt, unterscheiden sich auch in Köln die durchschnittlichen Mietpreise in den verschiedenen Stadtvierteln. Doch welche Faktoren nehmen Einfluss auf die Mietpreise? Kann man sie anhand einer Karte ablesen? Mit unserem Projekt möchten wir eine Darstellungsform der Mietpreise und potenziellen Einflussfaktoren im Kölner Stadtgebiet untersuchen.<br />
    Der Hauptkern unseres Projekts ist ein mit QGIS erstelltes Geoinformationssystem. Diese Website ist ein Vorschlag, wie man einzelne Ergebnislayer dieses Projekts auch online zugänglich machen und mit zusätzlichen Informationen kontextualisieren könnte.
</>

const dataText = <>
    Nach einer ausschweifenden Daten Recherche mussten wir festellen, dass die Mietpreisdaten der Stadt Köln über einen langen Zeitraum leider unzureichend und unvollständig sind. So haben wir uns entschieden, die Daten des Monitorings von 2019 und die Vergleichsdaten aus dem Jahr 2016 für unser Projekt zu verwenden. <br />
    Dafür haben wir gescannt, welche Daten das Monitoring erfasst und welche davon für unser Interessensgebiet relevant sind. Besonders interessiert haben uns die folgenden Werte in Zusammenhang mit den durchschnittlichen Mietpreisen der einzelnen Stadtviertel: Arbeitslosenquote, Geförderte Wohnungen, Einwohnerdichte, Haushaltsgröße. <br />
    Diese Daten stehen Ihnen unten als Download im csv-Format zur Verfügung. Das Monitoring der Stadt finden Sie außerdem als pdf <a href="https://www.stadt-koeln.de/mediaasset/content/pdf15/statistikmonitoring/monitoring_stadtentwicklung_ergebnisband.pdf">hier</a>.<br />
    Ein größerer Zeitraum von Mietdaten wird mit dem zweiten Dataset abgedeckt. Diese sind ebenso im CSV-Format unten als Download verfügbar. Die Daten stammen von Wohnungsboerse.net. Dabei handelt es sich um einen nicht anerkannten Mietspiegel. Berechnet mit den Angeboten des Immobilienportals. Daher dient er nur als Anhaltspunkt für Mietpreise, ist aber kostenlos abrufbar. Die verschiedenen Jahre konnten durch Archive.org abgerufen werden.<br />
    Mit den Mietfaktoren ist eine Sammlung von Faktoren aufzurufen, welche die Mietpreise unterschiedlich beeinflussen. Als wichtige Faktoren wurden Daten zur Gesundheit, Bildung, Freizeit und Kultur identifiziert und bei Offene Daten Köln, OpenStreetMap und GEOportal NRW abgerufen. Die Daten zum ÖPNV stammen von der KVB und dem VRS. Unterschiedliche Daten sind zur Übersichtlichkeit kombiniert worden.

</>

const analysisText = <>
// Hier kommt der Analyse Text rein
</>

export { aboutText, dataText, analysisText }

