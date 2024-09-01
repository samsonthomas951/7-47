from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import google.generativeai as genai
import json
from django_daraja.mpesa.core import MpesaClient
import os
genai.configure(api_key=os.getenv('GEMiNI_API'))

model = genai.GenerativeModel('gemini-1.5-flash')
def get_gemini_response(prompt):
    response = model.generate_content(prompt)
    return response.text

@api_view(['POST'])
def process_input(request):
    # Get the input from the POST request
    user_input = request.data.get('input')

    ai_response = get_gemini_response(user_input)
  #  response = json.loads(ai_response)
    print(ai_response)
    # Return Gemini API response to frontend
    return Response(ai_response)

@api_view(['POST'])
def process_mpesa(request):
  cl = MpesaClient()
  data = json.loads(request.body)
  mpesa_number = data.get("mpesa_number")
  amount = data.get("amount")   
  account_reference = 'Bariki Donations'
  transaction_desc = 'Description'
  callback_url = 'https://api.darajambili.com/express-payment'
  response = cl.stk_push(mpesa_number, int(amount) , account_reference, transaction_desc, callback_url)
  # print(response.text.encode('utf8'))

