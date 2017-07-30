



// Cache gallery container

const galleryContainer = document.querySelector('.react-gallery');

// Create array of image URLS

let imgUrls = [
  'https://static.pexels.com/photos/346885/pexels-photo-346885.jpeg',
  'https://static.pexels.com/photos/297755/pexels-photo-297755.jpeg',
  'https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg',
  'https://static.pexels.com/photos/338515/pexels-photo-338515.jpeg'
]

// Component for gallery image
class GalleryImage extends React.Component {
  render() {
    return(
      <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
    )
  }
}

// Component for gallery modal
class GalleryModal extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return(
      <div isOpen={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
        <div className='modal-body'>
          <a className='modal-close' href='#' onClick={this.props.onClick}><span className='fa fa-times'></span></a>
          <img src={this.props.src} />
        </div>
      </div>
    )
  }
}

// Component for gallery
class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: ''
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    return(
      <div refs='gallery-container' className='container-fluid gallery-container'>
        <div className='row'>
         {
          imgUrls.map((url, index) => {
           return <div className='col-sm-6 col-md-3 col-xl-2'>
            <div className='gallery-card'>
             <GalleryImage className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
             <span className='card-icon-open fa fa-expand' value={url} onClick={(e) => this.openModal(url, e)}></span>
            </div>
          </div>
         })
        }
      </div>

      <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
      </div>
    )
  }

  // Function to open modal dialog
  openModal(url, e) {
    this.setState({
      showModal: true,
      url: url
    })
  };

  // Function to close modal dialog
  closeModal() {
    this.setState({
      showModal: false,
      url: ''
    })
  };
}

// Render the gallery
ReactDOM.render(
  <Gallery imgUrls={imgUrls} />, document.getElementById('react-gallery');
