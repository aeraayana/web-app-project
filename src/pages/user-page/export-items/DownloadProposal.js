import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Font,
    Svg,
    Line,
} from "@react-pdf/renderer";
import LoraBold from '../../../assets/fonts/lora/Lora-Bold.ttf';
import Lora from '../../../assets/fonts/lora/Lora-Medium.ttf';
import LoraSemiBold from '../../../assets/fonts/lora/Lora-SemiBold.ttf';
import LoraItalic from '../../../assets/fonts/lora/Lora-Italic.ttf'

Font.register(
    { 
        family: 'Lora', fonts: [
            {
                src: LoraBold,
                fontWeight: 'bold',
            },
            {
                src: Lora,
            },
            {
                src: LoraItalic,
                fontStyle: 'italic',
            },
            {
                src: LoraSemiBold,
                fontWeight: 'semibold',
            },
        ]
    }
); 

const styles = StyleSheet.create({
    page: {
        fontFamily: "Lora",
        color: "black",
        padding: 30,
    },
    section: {
        fontSize: 12,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 12,
        padding: '0px 0px 10px 0px',
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 13,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        border: '1px solid black'
    },
    content: {
        fontSize: 12,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
        flexDirection: 'col',
        flexWrap: 'wrap',
        border: '1px solid black'
    },
    footer: {
        fontStyle: 'italic',
        fontSize: 12,
        padding: '0px 0px 10px 0px',
        textAlign: 'left',
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});

// Create Document Component
const BasicDocument = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.header}>
                        <Text>TEMPLATE</Text>
                        <Text>PROPOSAL SMALL GRANT</Text>
                        <Svg height={2}>
                            <Line
                                x1="2000"
                                y1="0"
                                x2="0"
                                y2="0"
                                strokeWidth={4}
                                stroke="rgb(0,0,0)"
                            />
                        </Svg>
                    </View>
                    <View style={styles.section}>
                        <Text wrap>I. </Text> <Text style={{ marginLeft: '20px', fontWeight: "bold" }}> UMUM</Text>
                    </View>
                    <View style={[styles.title, { marginTop: '5px' }]}>
                        <Text style={{ padding: '0px 5px 0px 5px', fontWeight: 'bold' }}>1. </Text>
                        <Text style={{ marginLeft: '10px' }}>Judul Kegiatan</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={{ padding: '0px 5px 0px 30px' }}>Bahasa Indonesia: {data.judul_pengajuan_kegiatan}</Text>
                    </View>
                    <View style={[styles.title, { marginTop: '20px' }]}>
                        <Text style={{ padding: '0px 5px 0px 5px', fontWeight: 'bold' }}>2. </Text>
                        <Text style={{ marginLeft: '10px' }}>Pengusul</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={{ padding: '0px 5px 0px 32px' }}>Nama: {data.kelompok_masyarakat}</Text>
                        <Text style={{ padding: '0px 5px 0px 32px' }}>Alamat: {data.lokasi}</Text>
                        <Text style={{ padding: '0px 5px 0px 32px' }}>Penjamin Kegiatan: {data.nama_pic}</Text>
                    </View>
                    <View style={[styles.title, { marginTop: '20px' }]}>
                        <Text style={{ padding: '0px 5px 0px 5px', fontWeight: 'bold' }}>3. </Text>
                        <Text style={{ marginLeft: '10px' }}>Nomor Proposal</Text>
                        <Text style={{ fontWeight: 'normal' }}>: {data.nomor_pengajuan}</Text>
                    </View>
                    <View style={[styles.title, { marginTop: '20px' }]}>
                        <Text style={{ padding: '0px 5px 0px 5px', fontWeight: 'bold' }}>4. </Text>
                        <Text style={{ marginLeft: '10px' }}>Perkiraan Bulan Pelaksanaan</Text>
                        <Text style={{ fontWeight: 'normal' }}>: {data.rencana_kegiatan}</Text>
                    </View>

                    <View style={[styles.section, { marginTop: '10px' }]}>
                        <Text wrap>II. </Text> <Text style={{ marginLeft: '20px', fontWeight: "bold" }}> JUSTIFIKASI</Text>
                    </View>
                    
                    <View style={[styles.title, { marginTop: '20px' }]}>
                        <Text style={{ padding: '0px 5px 0px 5px', fontWeight: 'normal' }}>5. &nbsp; &nbsp;Latar Belakang Kegiatan/Project Background (Maksimal 250 kata)</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={{ padding: '0px 5px 0px 30px' }}>Bahasa Indonesia: {data.proposal_kegiatan}</Text>
                        <Text style={{ padding: '0px 5px 0px 30px' }}> </Text>
                        <Text style={{ padding: '0px 5px 0px 30px' }}> </Text>
                        <Text style={{ padding: '0px 5px 0px 30px' }}> </Text>
                    </View>

                    <View style={[styles.title, { marginTop: '10px' }]}>
                        <Text style={{ padding: '0px 5px 0px 5px', fontWeight: 'normal' }}>6. &nbsp; &nbsp;Tujuan Kegiatan (Maksimal 250 kata)</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={{ padding: '0px 5px 0px 30px' }}>Bahasa Indonesia: {data.tujuan_kegiatan}</Text>
                        <Text style={{ padding: '0px 5px 0px 30px' }}> </Text>
                        <Text style={{ padding: '0px 5px 0px 30px' }}> </Text>
                        <Text style={{ padding: '0px 5px 0px 30px' }}> </Text>
                    </View>
                    
                    <View style={[styles.title, { marginTop: '20px' }]}>
                        <Text style={{ padding: '0px 5px 0px 5px', fontWeight: 'normal' }}>7. &nbsp; &nbsp;Ruang Lingkup Kegiatan/Scope of Work (Maksimal 250 kata)</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={{ padding: '0px 5px 0px 27px' }}>Bahasa Indonesia: {data.ruang_lingkup_kegiatan}</Text>
                        <Text style={{ padding: '0px 5px 0px 27px' }}> </Text>
                        <Text style={{ padding: '0px 5px 0px 27px' }}> </Text>
                        <Text style={{ padding: '0px 5px 0px 27px' }}> </Text>
                    </View>
                    <View style={[styles.footer, { marginTop: '10px' }]}>
                        <Text>Tanggal {data.tanggal_pengajuan}</Text>
                        <Text>Penanggung Jawab Usulan</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{ marginTop: '40px' }}>(tanda tangan dan stempel)</Text>
                        <Text style={{ marginTop: '15px', textDecoration: "underline" }}>({data.nama_pic})</Text>
                        <Text>({data.kelompok_masyarakat})</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default BasicDocument;