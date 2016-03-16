class UserNotifier < ActionMailer::Base
    require 'net/smtp'

    def send_email(confirmation)
      @mainname = confirmation[:mainname]
      @mainsurname = confirmation[:mainsurname]
      @email = confirmation[:email]
      @partnersname = confirmation[:partnersname]
      @partnerssurname = confirmation[:partnerssurname]
      @comming = confirmation[:comming]
      @bus = confirmation[:bus]
    message = <<EOF
From: Nos Cazamos! <noscazamoos@gmail.com>
To: Ivalisa <elisagpa.ivanao@gmail.com>
Subject: Confirmacion de asistencia a la Boda
Un nuevo invitado ha confirmado que #@comming podra asistir al enlace! Sus datos son

Nombre - #@mainname #@mainsurname
Email - #@email
Acompanante - #@partnersname #@partnerssurname
Bus - #@bus

No os olvideis de tenerle en cuenta!!
EOF

    smtp = Net::SMTP.new 'smtp.gmail.com', 587
    smtp.enable_starttls
    smtp.start('gmail.com', 'noscazamoos@gmail.com', 'NosCazamos', :login)
    smtp.send_message message, 'elisagpa.ivanao@gmail.com', 'elisagpa.ivanao@gmail.com'
    smtp.finish

  end
end