<template>
  <div class="container">
    <div>
      <img src="~/assets/platinum-md-logo.png" class="img-fluid pt-3 pt-md-0" alt="Platinum-MD">
      <h1 class="title">
        Minidisc + NetMD Upload
      </h1>
      <h2 class="subtitle">
        This project aims to make uploading audio files<br class="d-none d-sm-block"> to NetMD players seamless and automatic.
      </h2>
      <div class="row h-100 justify-content-center align-items-center pt-2 mt-md-5">
        <div class="col-12 col-md-6">
          <img src="~/assets/platinum-md-screenshot.png" class="img-fluid" alt="Screenshot">
        </div>
        <div class="col-12 col-md-6">
          <div v-if="$device.isMacOS || $device.isIos">
            <a href="https://github.com/gavinbenda/platinum-md/releases/download/v0.7.0-alpha/platinum-md-0.7.0.dmg" target="_blank" class="button--green download-button px-5"><font-awesome-icon :icon="['fab', 'apple']" class="button-icon" /><span>Download for MacOS</span></a>
            <b-button v-b-modal.install-macos class="mt-3">Please read the Install Instructions <font-awesome-icon :icon="['fas', 'external-link-alt']" /></b-button>
          </div>
          <div v-else-if="$device.isWindows || $device.isMobile">
            <a href="https://github.com/gavinbenda/platinum-md/releases/download/v0.7.0-alpha/platinum-md.Setup.0.7.0.exe" target="_blank" class="button--green"><font-awesome-icon :icon="['fab', 'windows']" class="button-icon" /><span>Download for Windows</span></a>
            <b-button v-b-modal.install-windows class="mt-3">Please read the Install Instructions <font-awesome-icon :icon="['fas', 'external-link-alt']" /></b-button>
          </div>
          <div v-else>
            <a href="https://github.com/gavinbenda/platinum-md/releases/download/v0.7.0-alpha/platinum-md-0.7.0.AppImage" target="_blank" class="button--green"><font-awesome-icon :icon="['fab', 'linux']" class="button-icon" /><span>Download for Linux</span></a>
            <b-button v-b-modal.install-linux class="mt-3">Please read the Install Instructions <font-awesome-icon :icon="['fas', 'external-link-alt']" /></b-button>
          </div>
          <div class="other-platforms">
            <h3>Also available for other platforms</h3>
            <div v-if="!$device.isMacOS">
              <a href="https://github.com/gavinbenda/platinum-md/releases/download/v0.7.0-alpha/platinum-md-0.7.0.dmg" target="_blank"><font-awesome-icon :icon="['fab', 'apple']" /> Download for MacOS</a>
            </div>
            <div v-if="!$device.isWindows">
              <a href="https://github.com/gavinbenda/platinum-md/releases/download/v0.7.0-alpha/platinum-md.Setup.0.7.0.exe" target="_blank"><font-awesome-icon :icon="['fab', 'windows']" /> Download for Windows</a>
            </div>
            <div v-if="$device.isWindows || $device.isMacOS">
              <a href="https://github.com/gavinbenda/platinum-md/releases/download/v0.7.0-alpha/platinum-md-0.7.0.AppImage" target="_blank"><font-awesome-icon :icon="['fab', 'linux']" /> Download for Linux</a>
            </div>
          </div>
        </div>
      </div>

      <footer class="row mt-5">
          <div class="col-12">
            <a href="https://github.com/gavinbenda/platinum-md" target="_blank" class="pr-3"><font-awesome-icon :icon="['fab', 'github']" /> Platinum-MD on GitHub</a>
            <a href="https://travis-ci.org/github/gavinbenda/platinum-md/"><img src="https://travis-ci.org/gavinbenda/platinum-md.svg?branch=master"></a>
          </div>
      </footer>

    </div>

    <b-modal id="install-macos" title="Installation on MacOS" size="xl" centered hide-footer>

      <p class="mt-4">You will need to install <a href="https://docs.brew.sh/Installation" target="_blank">Homebrew</a> by running the following command in <i>Terminal.app</i></p>

      <code>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code>

      <p class="mt-4">Then install the following dependancies, by using the following command:</p>

      <code>brew install --force pkg-config qt5 mad libid3tag libtag glib libusb libusb-compat libgcrypt ffmpeg && brew link --force qt5</code>

      <b-button class="mt-5" block @click="$bvModal.hide('install-macos')">Close</b-button>

    </b-modal>

    <b-modal id="install-windows" title="Installation on Windows" size="xl" centered hide-footer>

      <p class="mt-4">You will need to use <a href="https://zadig.akeo.ie/" target="_blank">Zadig</a> to install the WinUSB Driver. Connect your NetMD device, open the app and click the "Install Driver" button. Please note, this will disable Sonic Stage from having access to the device, you'll need to run Zadig and 'reinstall' the old driver to use it again.</p>

      <b-button class="mt-5" block @click="$bvModal.hide('install-windows')">Close</b-button>

    </b-modal>

    <b-modal id="install-linux" title="Installation on Linux" size="xl" centered hide-footer>

      <p class="mt-4">You will need to install some dependancies by running the following comamnd in a terminal:</p>

      <code>apt-get install libgcrypt20-dev libglib2.0-dev libusb-1.0-0-dev qt4-qmake libid3tag0-dev libmad0-dev</code>

      <p><i>*Note: This has only been tested on Ubuntu.</i></p>

      <p>You will also likely need to allow your user permissions to the USB/NetMD Device.
        This is a 'catch-all' but you may wish to add a specific deviceId/vendorId if you want to lock permissions down.</p>

        <code>sudo nano /etc/udev/rules.d/50-device.rules and add SUBSYSTEM=="usb", GROUP="YOURUSERGROUPHERE"</code>

        <b-button class="mt-5" block @click="$bvModal.hide('install-macos')">Close</b-button>

      </b-modal>

  </div>
</template>

<script>
import ogImage from '~/assets/platinum-md-og-preview.png'
export default {
  data () {
    return {
      title: 'Platinum MD - Minidisc + NetMD Upload',
      description: 'This project aims to make uploading audio files to NetMD players seamless and automatic.',
      url: 'https://platinum-md.app'
    }
  },
  head () {
    return {
      title: 'Platinum-MD - ' + this.title,
      meta: [
        { hid: 'platinum-md-homepage', name: 'description', content: this.description },
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'og:description', name: 'og:description', content: this.description },
        { hid: 'og:url', name: 'og:url', content: this.url },
        { hid: 'og:image', name: 'og:image', content: this.url + ogImage },
        { hid: 'og:type', name: 'og:type', content: 'website' }
      ]
    }
  }
}
</script>
