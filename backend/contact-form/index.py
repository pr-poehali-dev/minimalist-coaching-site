import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
import os

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Обработка заявок с формы обратной связи и отправка на email
    Args: event - dict with httpMethod, body, queryStringParameters
          context - object with attributes: request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    message = body_data.get('message', '')
    session_type = body_data.get('sessionType', '')
    
    session_types = {
        'session': 'Разовая сессия',
        'business': 'Бизнес-коучинг',
        'month': 'Сопровождение 1 месяц',
        'lego-individual': 'LEGO (индивидуально)',
        'lego-group': 'LEGO (групповое)',
        'sand-individual': 'Песочное (индивидуально)',
        'sand-group': 'Песочное (группа)',
        'corporate': 'Корпоративная сессия',
        'free-call': 'Бесплатный 15-минутный созвон'
    }
    
    session_name = session_types.get(session_type, session_type)
    
    email_body = f"""
    Новая заявка с сайта!
    
    Имя: {name}
    Телефон: {phone}
    Тип услуги: {session_name}
    Сообщение: {message}
    """
    
    msg = MIMEMultipart()
    msg['From'] = 'noreply@poehali.dev'
    msg['To'] = 'boss-357@mail.ru'
    msg['Subject'] = f'Новая заявка: {session_name}'
    
    msg.attach(MIMEText(email_body, 'plain', 'utf-8'))
    
    try:
        smtp_server = os.environ.get('SMTP_SERVER', 'smtp.yandex.ru')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        
        if not smtp_user or not smtp_password:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'SMTP credentials not configured'}),
                'isBase64Encoded': False
            }
        
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'}),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
