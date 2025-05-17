import { useState, useEffect } from 'react';

export default function Datenschutz() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('datenschutz-section');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section id="datenschutz-section" className="py-12 sm:py-16 lg:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h1 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12">
                        Datenschutzerklärung
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Informationen gem. Art. 13 Abs. 1 und Abs. 2 DSGVO</h2>
                        <p className="mb-4">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Im Zusammenhang mit der Funktionsfähigkeit dieser Website werden bei Ihnen personenbezogene Daten erhoben. Bitte beachten Sie hierzu nachstehende Datenschutzhinweise:
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Hinweis zur verantwortlichen Stelle</h3>
                        <p className="mb-4">
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                        </p>
                        <p className="mb-4">
                            <strong>TECHNOLOGIE TEAM GmbH</strong><br />
                            Sitz der Gesellschaft: Oberhausen<br />
                            Anschrift: Essener Str. 2-24, 46047 Oberhausen<br />
                            E-Mail: kontakt@technologie.team
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Angaben zum Vertreter der verantwortlichen Stelle</h3>
                        <p className="mb-4">
                            <strong>Geschäftsführer:</strong> Peter Heim<br />
                            <strong>Presserechtlich Verantwortlich:</strong> Peter Heim
                        </p>
                        <p className="mb-4">
                            Anschrift:<br />
                            Essener Str. 2-24, 46047 Oberhausen<br />
                            E-Mail: kontakt@technologie.team
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Zwecke und Rechtsgrundlage der Datenverarbeitung</h3>
                        <p className="mb-4">
                            Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben. Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen (berechtigtes Interesse des Verantwortlichen). Zudem dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Eine Auswertung der Daten zu Marketingzwecken findet in diesem Zusammenhang nicht statt. Die Speicherung von IP-Adressen in Logfiles erfolgt auf Grundlage Art. 6 Abs. 1 f) DSGVO.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">4. Auskunft, Löschung, Sperrung</h3>
                        <p className="mb-4">
                            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">5. Bereitstellung des Internets</h3>
                        <h4 className="text-lg font-semibold mb-2 text-gray-900">a. Art und Umfang der Datenverarbeitung</h4>
                        <p className="mb-4">
                            Bei Aufruf und Nutzung unserer Webseite erheben wir die personenbezogenen Daten, die Ihr Browser automatisch an unseren Server übermittelt. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Wenn Sie unsere Webseite nutzen, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen unsere Webseite anzuzeigen und die Stabilität und Sicherheit zu gewährleisten:
                        </p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>IP-Adresse des anfragenden Rechners</li>
                            <li>Datum und Uhrzeit des Zugriffs</li>
                            <li>Name und URL der abgerufenen Datei</li>
                            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                            <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners, sowie der Name Ihres Access-Providers</li>
                        </ul>
                        <p className="mb-4">
                            Die Daten werden ebenfalls in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt.
                        </p>

                        <h4 className="text-lg font-semibold mb-2 text-gray-900">b. Rechtsgrundlage</h4>
                        <p className="mb-4">
                            Für die genannte Datenverarbeitung dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage. Die Verarbeitung der genannten Daten ist für die Bereitstellung einer Webseite erforderlich und dient damit der Wahrung eines berechtigten Interesses unseres Unternehmens.
                        </p>

                        <h4 className="text-lg font-semibold mb-2 text-gray-900">c. Speicherdauer</h4>
                        <p className="mb-4">
                            Sobald die genannten Daten zur Anzeige der Webseite nicht mehr erforderlich sind, werden sie gelöscht. Die Erfassung der Daten zur Bereitstellung der Webseite und die Speicherung der Daten in Logfiles ist für den Betrieb der Internetseite zwingend erforderlich. Es besteht folglich seitens des Nutzers keine Widerspruchsmöglichkeit. Eine weitergehende Speicherung kann im Einzelfall dann erfolgen, wenn dies gesetzlich vorgeschrieben ist.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">6. Cookies</h3>
                        <p className="mb-4">
                            Wir setzten auf unserer Webseite Cookies ein. Cookies sind kleine Dateien, die im Rahmen Ihres Besuchs unserer Internetseiten von uns an den Browser Ihres Endgeräts gesendet und dort gespeichert werden. Einige Funktionen unserer Internetseite können ohne den Einsatz technisch notwendiger Cookies nicht angeboten werden. Andere Cookies ermöglichen uns hingegen verschiedene Analysen. Cookies sind beispielsweise in der Lage, den von Ihnen verwendeten Browser bei einem erneuten Besuch unserer Webseite wiederzuerkennen und verschiedene Informationen an uns zu übermitteln.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">7. Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                        <p className="mb-4">
                            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">8. Datensicherheit und Sicherungsmaßnahmen</h3>
                        <p className="mb-4">
                            Wir verpflichten uns, Ihre Privatsphäre zu schützen und Ihre personenbezogenen Daten vertraulich zu behandeln. Um eine Manipulation, einen Verlust oder einen Missbrauch Ihrer bei uns gespeicherten Daten zu vermeiden, treffen wir umfangreiche technische und organisatorische Sicherheitsvorkehrungen, die regelmäßig überprüft und dem technologischen Fortschritt angepasst werden. Hierzu gehört unter anderem die Verwendung anerkannter Verschlüsselungsverfahren (SSL oder TLS).
                        </p>

                        <h4 className="text-lg font-semibold mb-2 text-gray-900">SSL- bzw. TLS-Verschlüsselung</h4>
                        <p className="mb-6">
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                        </p>

                        <p>
                            Wir weisen Sie jedoch darauf hin, dass es aufgrund der Struktur des Internets möglich ist, dass die Regeln des Datenschutzes und die o. g. Sicherungsmaßnahmen von anderen, nicht innerhalb unseres Verantwortungsbereichs liegenden Personen oder Institutionen nicht beachtet werden. Insbesondere können unverschlüsselt preisgegebene Daten – z. B. wenn dies per E-Mail erfolgt – von Dritten mitgelesen werden. Wir haben technisch hierauf keinen Einfluss. Es liegt im Verantwortungsbereich des Nutzers, die von ihm zur Verfügung gestellten Daten durch Verschlüsselung oder in sonstiger Weise gegen Missbrauch zu schützen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}